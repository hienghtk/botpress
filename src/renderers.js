module.exports = {
	button: data =>({
       on: 'facebook',
       template_type: 'generic',
       elements: [{
           title: data.title,
           image_url: (data.image_url? data.image_url :(data.image ?  url.resolve(data.BOT_URL, data.image) : "")),
           subtitle: data.subtitle || null,
           buttons: data.choices? data.choices.map(a => ({                    
               type: "postback",
               title: a.title,
               payload: a.title
                       // type: 'web_url',
                       // url: 'https://google.com',
                       // title: 'Visit Google'
           })) : null
       }],

       typing: true
   })

}
