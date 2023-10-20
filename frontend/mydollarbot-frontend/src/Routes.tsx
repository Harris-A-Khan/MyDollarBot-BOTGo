// Assuming this is in a file like Routes.tsx or similar
import {Routes, Route } from 'react-router-dom';
import App from './App';

function MainRoutes() {
  return (
    <Routes>
    <Route path="/:user_id" element={<App />} />
    {/* ... other routes ... */}
    </Routes>
  );
}

export default MainRoutes;