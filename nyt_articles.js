 

class ArticlesGrid extends React.Component{
    constructor(props){
        super(props);
        this.state = { articles: []};
    }

    parse(results){
        console.log("b4");
        if(!results || !results.response) return [];
        console.log("after");

        var articles = results.response.docs;
        console.log('articles.length =' + articles.length);
        var parsedArcticles = [];

        for(var i = 0; i < articles.length;i++){
            var article = articles[i];
            // if(article.multimedia.find(this.isXL)){
                parsedArcticles.push({
                    id: article._id,
                    title: article.headline.main || 'Untitled',
                    //imageURL:article.multimedia.find(this.isXL).url || '#',
                    webURL: article.web_url || '#'
                });
            // }
        }
        console.log(parsedArcticles.length);
        return parsedArcticles;
    }

    isXL(image){
        return image.subtype === 'xlarge';
    }

    componentDidMount(){
        const proxyUrl = 'https://corsnewhereproxy.herokuapp.com/';
        var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=NF8suf64YUtTnVdqnV3OIPCXaMojHTMB';

        $.getJSON(url, function(data,status){
            return this.setState({articles:this.parse(data)});
        }.bind(this));
    }


    
    render(){
        return this.state.articles && (
            <div className='articles'>
                {
                    this.state.articles.map( function(Article){
                        return <Article article={article} key={article._id} />;
                    })
                }
            </div>
        );
    }
}



var Article = function({article}){
    var imgURL = 'https://static01.nyt.com/' + article.imageURL;
    return (
        <div className='article'>
            <a className='article-link' href='{article.webURL}'>
                <img className='article-image' title={article.title} src={imgURL}/>
            </a>
        </div>
    );
} 



ReactDOM.render( 
    <ArticlesGrid />,
    document.getElementById('articlesgrid')
);



