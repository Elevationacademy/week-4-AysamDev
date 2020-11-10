const fetch = function(queryType,queryValue)
{
  if(queryType == "isbn")
  {
    $.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${queryValue}`,function(respone)
    {
     
      const bookName = respone.items[0].volumeInfo.title
      const dv = $(`<div>${bookName}</div>`)
      $('body').append(dv)
    })
  }
  else
  {
    $.get(`https://www.googleapis.com/books/v1/volumes?q=${queryValue}`,function(respone)
    {
      
      const bookName = respone.items[0].volumeInfo.title
      const dv = $(`<div>${bookName}</div>`)
      $('body').append(dv)
    })
  }
}


$(`#sendCode`).on("click",function()
{
  const save = $('input').val()
  console.log(save)
  fetch(save)
})

fetch("title", "How to Win Friends and Influence People")
fetch("isbn", 9789814561778)