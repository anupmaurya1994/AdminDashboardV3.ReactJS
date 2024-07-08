import React, { useState, useEffect } from 'react';

function ScrollSpy(props) {
    const [scrollTargetIds, setScrollTargetIds] = useState(props.scrollTargetIds);
    const [activeNavClass, setActiveNavClass] = useState(props.activeNavClass);
    const [headerBackground, setHeaderBackground] = useState(props.headerBackground === "true" ? true : false);
    const [homeDefaultLink, setHomeDefaultLink] = useState("/");
    const [hashIdentifier, setHashIdentifier] = useState("#");

    useEffect(() => {
        if (props.router && props.router === "HashRouter") {
            setHomeDefaultLink("#/");
            setHashIdentifier("#/#");
        }
    }, [props.router]);

    const scrollTo = (start, to) => {
        window.scrollTo(0, to);
    };

    const getNavLinkElement = (sectionID) => {
        return document.querySelector(`a[href='${hashIdentifier}${sectionID}']`);
    };

    const getNavToSectionID = (navHref) => {
        return navHref.includes(hashIdentifier) ? navHref.replace(hashIdentifier, "") : "";
    };

    useEffect(() => {
        const handleHomeLinkClick = (event) => {
            event.preventDefault();
            scrollTo(window.scrollY, 0);
            window.location.hash = "";
        };

        const handleNavLinksClick = (event) => {
            event.preventDefault();
            let sectionID = getNavToSectionID(event.target.getAttribute("href"));

            if (sectionID) {
                let scrollTargetPosition = document.getElementById(sectionID).offsetTop - (headerBackground ? document.querySelector("div[data-nav='list']").scrollHeight : 0);
                scrollTo(window.scrollY, scrollTargetPosition);
            } else {
                scrollTo(window.scrollY, 0);
            }
        };

        if (document.querySelector(`a[href='${homeDefaultLink}']`)) {
            document.querySelector(`a[href='${homeDefaultLink}']`).addEventListener("click", handleHomeLinkClick);
        }

        document.querySelector("div[data-nav='list']").querySelectorAll("a").forEach((navLink) => {
            navLink.addEventListener("click", handleNavLinksClick);
        });

        return () => {
            if (document.querySelector(`a[href='${homeDefaultLink}']`)) {
                document.querySelector(`a[href='${homeDefaultLink}']`).removeEventListener("click", handleHomeLinkClick);
            }
        };
    }, [homeDefaultLink, headerBackground, hashIdentifier]);

    const scrollSection = () => {
        let scrollSectionOffsetTop;
        scrollTargetIds.forEach((sectionID, index) => {
            scrollSectionOffsetTop = document.getElementById(sectionID).offsetTop - (headerBackground ? document.querySelector("div[data-nav='list']").scrollHeight : 0);

            if (window.scrollY >= scrollSectionOffsetTop && window.screenY < scrollSectionOffsetTop + document.getElementById(sectionID).scrollHeight) {
                getNavLinkElement(sectionID).classList.add(activeNavClass);
                getNavLinkElement(sectionID).parentNode.classList.add(activeNavClass);
                clearOtherNavLinkActiveStyle(sectionID);
            } else {
                getNavLinkElement(sectionID).classList.remove(activeNavClass);
                getNavLinkElement(sectionID).parentNode.classList.remove(activeNavClass);
            }

            if (window.innerHeight + window.scrollY >= document.body.scrollHeight && index === scrollTargetIds.length - 1) {
                getNavLinkElement(sectionID).classList.add(activeNavClass);
                getNavLinkElement(sectionID).parentNode.classList.add(activeNavClass);
                clearOtherNavLinkActiveStyle(sectionID);
            }
        });
    };

    const clearOtherNavLinkActiveStyle = (excludeSectionID) => {
        scrollTargetIds.forEach((sectionID, index) => {
            if (sectionID !== excludeSectionID) {
                getNavLinkElement(sectionID).classList.remove(activeNavClass);
                getNavLinkElement(sectionID).parentNode.classList.remove(activeNavClass);
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollSection, true);

        return () => {
            window.removeEventListener("scroll", scrollSection, true);
        };
    }, [scrollSection]);

    return (
        <div data-nav="list" className={props.className}>
            {props.children}
        </div>
    );
}

export default ScrollSpy;
