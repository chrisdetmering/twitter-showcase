import React, { useEffect }  from 'react';
import Navbar from '../components/NavBar/NavBar.js';
import './PageLayout.css'

const PageLayout = ({children}) => {
    useEffect(() => {
        setScrollListener();
    }, [])

    const setScrollListener = () => {
        const container = document.getElementById('main-content');
        container.addEventListener('scroll', () => {
            const textContent = document.querySelectorAll('.scroll-div')
            textContent.forEach((e, i) => {
                const top = (e.getBoundingClientRect().top);
                if(top < 200 && top > -150) {
                    e.classList.add('in-view')
                    setInvisibleClass(e)
                } else {
                    e.classList.remove('in-view');
                }
            })
        })
    }

    const setInvisibleClass = (element) => {
        const pointer = document.querySelector('.pointer');
        if(element.classList.contains('end')){
            pointer.style.display = 'none';
            return;
        }
        pointer.style.display = 'block';
    }

    return (
        <React.Fragment>
            <div id="body">
                <Navbar />
                <div id="main-content">{children}</div>
                <div id="logo">DROPS</div>
            </div>
        </ React.Fragment>
    );
}

export default PageLayout;