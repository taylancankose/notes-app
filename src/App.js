import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import NoteList from './components/NoteList';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Form />
      <NoteList />
      <Footer />
    </div>
  );
}

export default App;
