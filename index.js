function Manga(nomeManga,precoManga,editoraManga){
  this.nomeManga = nomeManga,
  this.precoManga= precoManga,
  this.editoraManga= editoraManga,

  this.comprar =  function(){

    console.log('Comprando...');
  }
}
const manga = new Manga('Naruto gold',34.90,'Panini');
console.log(manga);