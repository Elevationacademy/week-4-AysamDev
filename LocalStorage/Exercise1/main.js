const wisdom = []

const addTextToHtml = function(text,id)
{
  console.log(id)
  console.log(text)
  const mdiv = $('<div class=myText></div>')
  const dl = $(` <span class=delete data-id=${id}>${"X"}</span>`)
  const dv = `<span  id=text${id}>${text}</span>`
  mdiv.append(dv)
  mdiv.append(dl)
  $('#posts1').append(mdiv)
}

const render = JSON.parse(localStorage.wisdom || "[]")
for(let i in render)
{
  addTextToHtml(render[i].text,i+1)
  wisdom.push(render[i])
}

$('#sendText').on('click',function ()
{
  const inputText = $('#inputText').val()
  if(inputText != "")
  {
    $('#inputText').val("")
    const a = {}
    a.text = inputText
    wisdom.push(a)
    addTextToHtml(inputText,wisdom.length)
    if(wisdom.length %2 == 0)
    {
      localStorage.wisdom = JSON.stringify(wisdom)
    }
}
})

$(`#posts1`).on('click','.delete',function()
{
  const index = $(this).data().id
  const a = $(this).closest(`#posts1`).find(`#text${index}`).parent()
  const b = $(this).closest(`#posts1`).find(`#text${index}`).text()
  wisdom.splice(wisdom.indexOf(b),1)
  render.splice(render.indexOf(b),1)
  localStorage.wisdom = JSON.stringify(render)
  a.remove()
})


$(`#deleteAll`).on('click',function()
{
  localStorage.clear()
  location.reload()
})