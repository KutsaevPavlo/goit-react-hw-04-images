import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import css from './App.module.css';

export default function App() {
  const [materials, setMaterials] = useState([]);
  const [searchimg, setSearchimg] = useState('');
  const [page, setPage] = useState(1);

  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handlFormSubmit = searchimg => {
    this.setState({ searchimg, page: 1 });
  };

  return (
    <section className={css.App}>
      <div>
        <Searchbar handlFormSubmirt={this.handlFormSubmit} />
        <ImageGallery
          page={this.state.page}
          searchimg={this.state.searchimg}
          incrementPage={this.incrementPage}
        />
      </div>
    </section>
  );
}

// export class App extends Component {
//   state = {
//     materials: [],
//     searchimg: '',
//     page: 1,
//   };

//   incrementPage = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   handlFormSubmit = searchimg => {
//     this.setState({ searchimg, page: 1 });
//   };

//   render() {
//     return (
//       <section className={css.App}>
//         <div>
//           <Searchbar handlFormSubmirt={this.handlFormSubmit} />
//           <ImageGallery
//             page={this.state.page}
//             searchimg={this.state.searchimg}
//             incrementPage={this.incrementPage}
//           />
//         </div>
//       </section>
//     );
//   }
// }
