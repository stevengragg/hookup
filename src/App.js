
import './App.css';
import Header from './Header';
import ProfileCards from './ProfileCards';

function App() {
  // BEM class naming convention
  return (
    <div className="app">
     {/* Header */}
     <Header />
     {/* Profile Cards */}
     <ProfileCards />
     {/* Buttons/Options */}
    </div>
  );
}

export default App;
