import React from 'react';
const jsonPostHref = "http://localhost:5000/post";
const maxTwitsPage = 20 // su modificación requiere cambiar el return de Twits

function Twit (el){
    // console.log ("funcion twit (", el, ")");                                                       // test-123
    return (
        <div className="content__container">
            <div className="content__top">
              <div className="content__top-left">
                  <a href={el.post.principal_page}>
                      <img src={el.post.image} alt={el.post.genero}></img>
                  </a>
                  <p>{el.post.name}</p>
                  <a href={el.post.principal_page}>Follow</a>
              </div>
              <div><i className="fas fa-ellipsis-h"></i></div>
              <div className="content__buttons">
                  <button className="edit creador-post">Edit</button>
                  <button className="delete">Delete</button>
              </div>
            </div>
            <div className="content__block">
               <p>{el.post.pubication}</p>
            </div>
            <div className="content__bottom">
                <p>{el.post.views} views</p>
                <div className="content__bottom-icon"> 
                    <div><i className="far fa-paper-plane"></i></div>
                    <div><i className="far fa-retweet"></i></div>
                    <div><i className="far fa-heart"></i></div>
                </div>
            </div>
        </div>
    );
}


function antiDesbordes(maxTwits, resto) {
    // console.log("funcion antiDesvordes = ");                                                       // test-123
    // if (resto < 0) {                                                                               // test-123
    //     console.error("resto no puede ser negativo");                                              // test-123
    // }                                                                                              // test-123
    if (maxTwits - resto < 0) {
        // console.log(Math.trunc(Math.random () * maxTwits), "true");                                // test-123
        return Math.trunc(Math.random () * maxTwits);
    }else {
        // console.log(maxTwits - resto ," false");                                                   // test-123
        return maxTwits - resto;
    }
}


function Twits (){
    let page = 0;
    let i = 0;
    let maxTwits = maxTwitsPage;
    try 
    {
        let jonPost = new XMLHttpRequest ();
        jonPost.open("GET", jsonPostHref, false);
        jonPost.send ();                                                                              // pendiente-123-1 intentar hacer sistema para "agarrar solo lo necesario": https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
        let post = JSON.parse (jonPost.response);
        // if (maxTwitsPage <= 0){                                                                    // test-123
        //     console.error("error MaxTwitsPage no puede ser 0 o negativo");                         // test-123
        //     RangeError ("MaxTwitsPage no puede ser 0 o negativo");
        // }                                                                                          // test-123
        while (i < maxTwitsPage) {
            // console.log("i = ",i);
            if (post[page * 10 + i] === undefined) {
                // console.log("true");                                                               // test-123
                maxTwits = page * 10 + i;
                i = maxTwitsPage;
            }else{
                // console.log("else");                                                               // test-123
                i++;
            }
        }
        // console.log("maxTwits = ", maxTwits);                                                      // test-123
        // lamento la cantidad de "post" que hay pero no encontre otra manera
        return (
                <div>
                    <Twit post = {post[antiDesbordes(maxTwits, 1)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 2)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 4)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 5)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 3)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 6)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 7)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 8)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 9)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 10)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 11)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 12)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 13)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 14)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 15)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 16)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 17)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 18)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 19)]}/>
                </div>
        );
    }catch (error)
    {
        console.log (`Error ${error.status}: ${error.statusText}`);
        return(
            <div>
                <p color = "FFFFFF">error {error.status}: {error.statusText}</p>
            </div>
        )
    }
    
}


class Post {
    constructor() {
        this.principal_page = "http://localhost:3000/users/dashboard/u0002.html";
        this.genero = "unknown";
        this.name = "another WW user";
        this.image = "http://localhost:3000/users/images/u0000.jpg";
        this.pubication = "";
        this.views = 0;
    }
}


function enviar(texto) {
    let jonPost = new XMLHttpRequest();
    let post = new Post();
    post.pubication = texto;
    console.log(post);
    console.log("position 1");
    jonPost.open("POST", jsonPostHref, false);
    jonPost.send(post); // error 500 fallo en el servidor ?

}

class Formulario extends React.Component {
    constructor() {                                                                                // pendiente-123-2  \('_')/  : No se me ocurrio otra forma de obtener el input. El "ctrl + c" es de: https://es.reactjs.org/docs/forms.html
        super();                    
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        enviar(this.state.value);
    }
  
    render() {return (
        <form className="form-post" onSubmit={this.handleSubmit}>
            <input 
                type="text" 
                value={this.state.value} 
                onChange={this.handleChange} 
                placeholder="What's Happening?" 
                required
            />
            <input type="submit" value="Hoo Hoo"></input>
            <input type="hidden" name="id"></input>
            <div className="form-post-close__btn">
                <i className="fas fa-times"></i>
            </div>
        </form>
    )}
}



function FeedPage () {
    let UserPage = "users/dashboard/u0001.html";
  
    return (
        <div className="main">
            <div className="header">
                <a href="%PUBLIC_URL%/index.html">WW</a>
                <div>
                    <input type="search" id="gsearch" name="gsearch" placeholder="Explore" onn/>
                    <i className="fas fa-search"></i>
                </div>
                <Formulario/>
            </div>
            <Twits/>
            <div class="btn">
                <a href="#"><i class="fas fa-plus">publicar</i></a>
            </div>
            <div class="btn btn-2">
                <a href={"%PUBLIC_URL%/",UserPage}><i class="fas fa-user">usuario</i></a>
            </div>

        </div>
    )
}

export default FeedPage
