import React, { useEffect } from "react";
import { getCurrentSession } from "../../../../common/custom"

export function Footer() {

    useEffect(() => {
        if (
            window.Tawk_API !== undefined &&
            typeof window.Tawk_API.hideWidget === 'function'
        ) {
            window.Tawk_API.hideWidget();
        }
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row align-items-center">
                    <ul className="footer-row">
                        <li>Copyright {getCurrentSession()}  LLC. All Rights Reserved.</li>
                        <li><a href="#email" onClick={(e) => e.preventDefault()}>contact@.com</a></li>

                    </ul>
                    <ul className="footer-row footer-social-icn">
                        <li><a href="https://www.facebook.com/" target="_blank" class="text-light"><i class="fab fa-facebook-f facebook"></i></a></li>
                        <li> <a href="https://www.pinterest.com/" target="_blank" class="text-light"><i class="fab fa-pinterest pinterest"></i></a></li>
                        <li><a href="https://www.twitter.com/" target="_blank" class="text-light"><i class="fab fa-twitter twitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}