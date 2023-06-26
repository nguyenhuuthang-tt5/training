import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes';
import AuthProvider from './context/AuthProvider';
function App() {
  return (
    <AuthProvider>
      <AnimatedRoutes />
    </AuthProvider>
  );
}

export default App;
