  const fetch = function(queryType,queryValue)
  {
    if(queryType == "isbn")
    {
      $.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${queryValue}`,function(respone)
      {
      for(let item of respone.items)
      {
        const bookName = item.volumeInfo.title
        const bookAuthor = item.volumeInfo.authors
        const dv = $(`<div>Book: ${bookName}.
        Author: ${bookAuthor}.
        ISBN: ${queryValue}.</div>`)
        $('body').append(dv)
      }
      
      })
    }
    else
    {
      $.get(`https://www.googleapis.com/books/v1/volumes?q=${queryValue}`,function(respone)
      {
        
        for(let item of respone.items)
        {
        const bookName = item.volumeInfo.title
        const bookAuthor = item.volumeInfo.authors
        const ISBN = item.volumeInfo.industryIdentifiers[0].identifier
        const dv = $(`<div>Book: ${bookName}.
        Author: ${bookAuthor}.
        ISBN: ${ISBN}.</div>`)
        $('body').append(dv)
        }

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