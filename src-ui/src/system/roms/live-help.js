import tag from '@sillonious/tag'

const script = document.createElement('script');
script.onload = function () {
	const $ = tag('live-help')

	$.draw(target => {
		if(target.api) return
		const room = target.getAttribute('room')

		target.api = new JitsiMeetExternalAPI("8x8.vc", {
			roomName: room || "vpaas-magic-cookie-601556760e2e4612a620aad1abd2b1d1/SampleAppOutdoorWeeksWantSubsequently",
			parentNode: target
		});
	})

  $.flair(`
    & iframe {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  `)
};

script.src = "https://8x8.vc/vpaas-magic-cookie-601556760e2e4612a620aad1abd2b1d1/external_api.js";
document.head.appendChild(script); 
