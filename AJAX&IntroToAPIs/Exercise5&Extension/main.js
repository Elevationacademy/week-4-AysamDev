const favoriteGifs = []
const fetch = function(search)
{
  $.get(`https://api.giphy.com/v1/gifs/search?api_key=jrytziV62gYO1X5Zps15G5Ub4ULASALM&q=${search}}&limit=25&offset=0&rating=g&lang=en`,function(respone)
{
  const array = respone.data
  const gifs = array.slice(0,5)
  let i = 1
  for(let gif of gifs)
  {
    const a = $(`<iframe id="gif${i}" data-id:${i} src="" frameborder="2"></iframe>`)
    $(a).attr("src",`${gif.embed_url}`)
    $('#container').append(a)
    $(`#container`).append(`<button class=add data-id:${i++} >Add To Fav</button>`)
    
  }
})
}


$(`#submit`).on("click",function()
{
  const save = $('input').val()
  fetch(save)
})

$('#container').on('click','.add',function()
{
  console.log("hey")
  const clicked = $(this)
  const save = $(clicked)[0]
  console.log($(save)[0].data().id)
  $('#container').empty()
  $('#input').val('')
})

