import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

/*import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
    return (
        <div>
            <h2> I like {name} </h2>
            <h4>{rating}/5.0</h4>
            <img src = {picture} alt = {name}/>
        </div>
    );
}

const foodILike = [
    {
        id : 1,
        name : 'kimchi',
        image : 'data:image/jpeg;base64,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',
        rating : 5,
    }
];

function App() {
    return (
    <div>
        <h4>Hello~</h4>
        {foodILike.map(dish => (<Food key = {dish.id} name = {dish.name} picture = {dish.image} rating={dish.rating}/>))}
    </div >
    );
}

Food.propTypes = {
    name : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired,
    rating : PropTypes.number
};*/

/*
class App extends React.Component{
    constructor(props){
        super(props);
        console.log('hello');
    }
    state = {
        count : 0
    };

    add = () =>{
        //console.log('add');
        //this.state.count = 1;
        //this.setState({ count : this.state.count + 1 });
        this.setState(current => ({count : current.count + 1}));
    };

    minus = () => {
        //console.log('minus');
        //this.state.count = -1;
        //this.setState({ count : this.state.count -1 });
        this.setState(current => ({count : current.count - 1}));
    };

    componentDidMount(){
        console.log('component rendered');
    }

    componentDidUpdate(){
        console.log('I just update');
    }

    componentWillUnmount(){
        console.log('Goodbye');
    }

    render() {
        console.log("I'm rendering");
        return (
        <div>
            <h1>The number is : {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>
        );
    }
}

export default App;
*/

class Home extends React.Component{
    state = {
        isLoading: true,
        movies: []
    };

    // async 와 await 는 동시에 사용해야 함
    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        }= await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        this.setState({ movies , isLoading: false});     // ES6에서는 객체의 키와 대입할 변수의 이름이 같다면 코드 축약 가능(= setState({ movies : movies}) )
    }

    componentDidMount(){
        // 영화 데이터 로딩
        /*
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 6000);
        */
       this.getMovies();
    }

    // 리액트에서는 class가 아닌 className으로 씀 *( <label for = "name" 이 아닌 label htmlFor = "name" 으로 씀 )
    render(){
        const { isLoading, movies } = this.state;
        return (
        <section className ="container">
            {isLoading ? (
                <div className = "loader">
                    <span className ="loader__text">Loading...</span>

                </div>
                ) : (
                    <div className = "movies">
                        { movies.map(movie => (
                            <Movie
                            key = {movie.id}        // 컴포넌트를 여러 개 출력할 때 유일한 값을 이용하여 key props 추가
                            id = {movie.id}
                            year = {movie.year}
                            title = {movie.title}
                            summary = {movie.summary}
                            poster = {movie.medium_cover_image}
                            genres = {movie.genres}
                            />
                        ))}
                        </div>
        )}
        </section>
        );
    }
}

export default Home;