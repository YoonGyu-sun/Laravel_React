import { createRoot } from 'react-dom/client'; // createRoot를 "react-dom/client"에서 불러오기

// Layout
import NavigationLayout from './Layouts/NavigationLayout';
import MainLayout from './Layouts/MainLayout';

// createRoot로 감싸서 렌더링
const navigationRoot = createRoot(document.getElementById('navigationlayout'));
navigationRoot.render(<NavigationLayout />);

const mainRoot = createRoot(document.getElementById('mainlayout'));
mainRoot.render(<MainLayout />);
