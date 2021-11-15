// design
import './App.css';
// Components
import Header from './Header';
import ProfileCards from './ProfileCards';
import SwipeButton from './SwipeButton';

function App() {
  // BEM class naming convention
  return (
    <div className="app">
     {/* Header */}
     <Header />
     {/* Profile Cards */}
     <ProfileCards />
     {/* Buttons/Options */}
     <SwipeButton />
    </div>
  );
}

export default App;
