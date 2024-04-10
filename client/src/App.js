import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import ContactPage from './pages/ContactPage';
import NewContactPage from './pages/NewContactPage';
import NewContact from './components/NewContact';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<ContactPage />} />
          <Route path="/contacts/new" element={<NewContactPage isNewContact={true} />} />
          <Route path="/contacts/:id" element={<NewContactPage isNewContact={false} />} />
          <Route path="*" element={<ContactPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import store from './redux/store';
// import { Provider } from 'react-redux';
// import ContactPage from './pages/ContactPage';
// import NewContactPage from './pages/NewContactPage';
// import NewContact from './components/NewContact';

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Routes>
//           <Route path="*" element={<ContactPage />} />
//           <Route path="/contacts/new" element={<NewContactPage/>} />
//           <Route path="/contacts" element={<ContactPage/>} />
//           <Route path="/contacts/:id" element={<NewContact/>} />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

// export default App;

