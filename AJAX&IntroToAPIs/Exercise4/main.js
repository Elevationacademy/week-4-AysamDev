

$.get(`https://api.giphy.com/v1/gifs/search?api_key=jrytziV62gYO1X5Zps15G5Ub4ULASALM&q=hey&limit=25&offset=0&rating=g&lang=en
`,function(respone)
{
  $('body').append(`<iframe src="${respone.data[0].embed_url}" frameborder="0"></iframe>`)
})