function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 3 | 8;
        return v.toString(16);
    });
}
const CACHE = "CACHE";
function createStore(initialState = {
}, notify = ()=>null
, save = ()=>null
) {
    let state = {
        [CACHE]: {
        },
        ...initialState
    };
    const context = {
        set: function(schema, payload, handler = defaultHandler) {
            if (typeof handler === 'function') {
                const newCache = touchCache(state[CACHE], schema);
                const newResource = handler(state[schema] || {
                }, payload);
                state = {
                    ...state,
                    [CACHE]: newCache,
                    [schema]: newResource
                };
                save(schema, state[schema]);
                notify(state);
            } else {
                console.error('No Resource Handler provided: ', schema, payload);
            }
        },
        get: function(schema) {
            return state[schema];
        }
    };
    return context;
}
function touchCache(state, schema) {
    return {
        ...state,
        [schema]: uuidv4()
    };
}
function defaultHandler(state, payload) {
    return {
        ...state,
        ...payload
    };
}
const databaseName = 'ion';
const storeName = 'cache';
const database = new Promise(function initialize(resolve, reject) {
    const request = indexedDB.open(databaseName, 1);
    request.onupgradeneeded = function(event) {
        const database = event.target.result;
        database.createObjectStore(storeName, {
            keyPath: 'schema',
            autoIncrement: false
        });
    };
    request.onsuccess = function(event) {
        resolve(event.target.result);
    };
});
async function load(keys) {
    const db = await database;
    const transaction = db.transaction(storeName);
    const objectStore = transaction.objectStore(storeName);
    const rows = await new Promise(function loadFromDatabase(resolve, reject) {
        const rows = [];
        const read = objectStore.openCursor();
        read.onsuccess = function(event) {
            let cursor = event.target.result;
            if (cursor) {
                if (keys.includes(cursor.key)) {
                    rows.push(cursor.value);
                }
                cursor.continue();
            } else {
                resolve(rows);
            }
        };
        read.onerror = reject;
    });
    return rows;
}
async function save(schema, data) {
    const db = await database;
    const record = {
        schema,
        data
    };
    const transaction = db.transaction(storeName, 'readwrite');
    const objectStore = transaction.objectStore(storeName);
    let request;
    return new Promise(function saveToDatabase(resolve, reject) {
        try {
            request = objectStore.get(schema);
            request.onsuccess = function(event) {
                const request = objectStore.put(record);
                request.onsuccess = resolve;
            };
        } catch (e) {
            const request = objectStore.add(record);
            request.onsuccess = resolve;
            request.onerror = reject;
        }
    });
}
const __default = {
    save,
    load
};
function uuidv41() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 3 | 8;
        return v.toString(16);
    });
}
const renderEvent = new Event('render');
const mountEvent = new Event('mount');
let selectors = [];
function observe(selector) {
    selectors = [
        ...new Set([
            ...selectors,
            selector
        ])
    ];
    render();
}
function disregard(selector) {
    const index = selectors.indexOf(selector);
    if (index >= 0) {
        selectors = [
            ...selectors.slice(0, index),
            ...selectors.slice(index + 1)
        ];
    }
}
function render(_state) {
    const subscribers = getSubscribers(document);
    dispatchRender(subscribers);
}
function getSubscribers(node) {
    if (selectors.length > 0) return [
        ...node.querySelectorAll(selectors.join(', '))
    ];
    else return [];
}
function dispatchRender(subscribers) {
    subscribers.map((s)=>{
        if (!s.mounted) {
            s.mounted = true;
            if (!s.id) s.id = uuidv41();
            s.dispatchEvent(mountEvent);
        }
        s.dispatchEvent(renderEvent);
    });
}
const config = {
    childList: true,
    subtree: true
};
function mutationObserverCallback(mutationsList, observer) {
    const subscriberCollections = [
        ...mutationsList
    ].map((m)=>getSubscribers(m.target)
    );
    subscriberCollections.forEach(dispatchRender);
}
const observer = new MutationObserver(mutationObserverCallback);
observer.observe(document.body, config);
function listen(type, selector, handler, scope) {
    const callback = (event)=>{
        if (event.target && event.target.matches && event.target.matches(selector)) {
            handler.call(this, event, scope);
        }
    };
    document.addEventListener(type, callback, true);
    return function unlisten() {
        document.removeEventListener(type, callback, true);
    };
}
const observableEvents = [
    'render',
    'mount'
];
function on(type, selector, handler) {
    const unbind = listen(type, selector, handler, this);
    if (observableEvents.includes(type)) {
        observe(selector);
    }
    return function unlisten() {
        if (type === 'render') {
            disregard(selector);
        }
        unbind();
    };
}
let lastState = {
};
let subscribers = [
    render
];
const notify = (state)=>{
    lastState = state;
    subscribers.map(function notifySubscriber(notify) {
        notify(state);
    });
};
const store = createStore({
}, notify, __default.save);
const ion = {
    set: store.set,
    get: store.get,
    load: function load(schema) {
        __default.load(schema).then(function restoreFromCache(rows) {
            rows.map(({ schema , data  })=>store.set(schema, data)
            );
        });
    },
    restore: function restore(schema) {
        return __default.load(schema).then(function restoreFromCache(rows) {
            const row = rows.find((x)=>x.schema === schema
            ) || {
                data: {
                }
            };
            return row.data;
        });
    },
    relay: function relay(subscriber) {
        subscribers = [
            ...subscribers,
            subscriber
        ];
        subscriber(lastState);
    }
};
ion.on = on.bind(ion);
ion.on;
ion.load;
ion.relay;
ion.set;
ion.get;
let virtualDOM;
let equal = (a, b)=>a === b
;
const cleanStates = {
};
const dom = (target, html)=>{
    if (virtualDOM) {
        virtualDOM(target, html);
    } else {
        target.innerHTML = html;
    }
};
function mount(selector, callback) {
    ion.on('mount', selector, (event)=>{
        console.log(event.target.id);
        callback(event.target);
    });
}
async function render1(selector, callback, dependencies = []) {
    ion.on('render', selector, (event)=>{
        const id = [
            ...event.target.attributes
        ].reduce((data, x)=>{
            return `${data}${x.name}${x.value}`;
        }, '');
        if (clean(id, selector, dependencies)) return;
        const { loaded  } = read(selector);
        if (!loaded) return;
        const html = callback(event.target);
        if (html) dom(event.target, html);
    });
    const { innerHTML  } = await import('https://esm.sh/diffhtml');
    virtualDOM = innerHTML;
}
function style(selector, stylesheet) {
    const styles = `
    <style type="text/css" data-tag=${selector}>
      ${stylesheet.replaceAll('&', selector)}
    </style>
  `;
    document.body.insertAdjacentHTML("beforeend", styles);
}
function read(selector) {
    return ion.get(selector) || {
    };
}
function write(selector, payload, middleware) {
    ion.set(selector, payload, middleware);
}
function on1(selector1, eventName, selector2, callback) {
    ion.on(eventName, `${selector1} ${selector2}`, callback);
}
function restore(selector, initialState) {
    const promise = ion.restore(selector);
    promise.then((state)=>{
        write(selector, {
            ...initialState,
            ...state,
            loaded: true
        });
    });
    write(selector, initialState);
    return promise;
}
function clean(id, selector, ...more) {
    const selectors = [
        selector,
        ...more
    ];
    const cacheIndex = `${id}${new Error().stack}`;
    const cache = cleanStates[cacheIndex] || function init() {
        return cleanStates[cacheIndex] = {
        };
    }();
    return selectors.every((x)=>{
        const previous = cache[x];
        const current = ion.get(x);
        const same = equal(previous, current);
        cleanStates[cacheIndex][x] = current;
        return same;
    });
}
function tag(selector, initialState = {
}) {
    let thisTagReady = false;
    function ready(hook) {
        if (!thisTagReady) {
            requestAnimationFrame(()=>ready(hook)
            );
            return;
        }
        hook();
    }
    restore(selector, initialState).then(()=>thisTagReady = true
    );
    return {
        ready,
        selector,
        mount: mount.bind(null, selector),
        read: read.bind(null, selector),
        render: render1.bind(null, selector),
        style: style.bind(null, selector),
        on: on1.bind(null, selector),
        write: write.bind(null, selector),
        slug: selector,
        css: style.bind(null, selector),
        html: render1.bind(null, selector),
        get: read.bind(null, selector),
        restore: function() {
            console.error('#tag.restore() was deprecated. please use #tag.ready instead.');
        },
        set: write.bind(null, selector)
    };
}
import('https://esm.sh/fast-equals@2.0.4').then(({ deepEqual  })=>equal = deepEqual
);
export { tag as default };
