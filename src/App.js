import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { GlobalStyle } from "./css/globalStyle";
import { Theme } from "./css/theme";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContainer from "./containers/HomeContainer";
import JobContainer from "./containers/JobContainer";
import NotFound from "./containers/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}> 
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeContainer/>}/>
        <Route path="/job/:jobId" element={<JobContainer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;