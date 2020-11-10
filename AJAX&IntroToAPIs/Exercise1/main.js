const fetch = function(ISBN)
{
  $.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`,function(respone)
  {
    console.log(respone)
    const bookName = respone.items[0].volumeInfo.title
    const dv = $(`<div>*${ISBN} - ${bookName}</div>`)
    $('body').append(dv)
  })
}


$(`#sendCode`).on("click",function()
{
  const save = $('input').val()
  console.log(save)
  fetch(save)
})