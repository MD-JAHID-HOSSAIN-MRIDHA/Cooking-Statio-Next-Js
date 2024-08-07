"use client"
import Link from 'next/link';
import { useRef, useState } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaInstagram } from "react-icons/fa6";

export default function SocialList() {
  const twitter = useRef(null)
  const instagram = useRef(null)
  const [show, setShow] = useState(false);
  const [showInstagram, setShowInstagram] = useState(false);
  return (
    <ul className="sociallist">
      <li>
        <Overlay target={twitter.current} show={show} placement="top">
          {(props) => (
            <Tooltip id="twitter" {...props}>
              Twitter
            </Tooltip>
          )}
        </Overlay>
        <Link
          href="#"
          className="socilalist-link"
          target="_blank"
          ref={twitter}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <span className="icon-wrapper">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_698_456)">
                <path
                  d="M16.8408 5.4457C16.8513 5.60502 16.8513 5.7651 16.8513 5.92593C16.8513 10.8393 13.1358 16.5046 6.34384 16.5046V16.5016C4.33759 16.5046 2.37259 15.9262 0.683594 14.8352C0.975344 14.8706 1.26859 14.888 1.56259 14.8888C3.22609 14.8903 4.84159 14.3285 6.14884 13.294C4.56859 13.2638 3.18259 12.2263 2.69884 10.7116C3.25234 10.8189 3.82234 10.797 4.36609 10.6482C2.64259 10.2979 1.40359 8.77335 1.40359 7.00344C1.40359 6.98758 1.40359 6.97172 1.40359 6.95662C1.91734 7.24506 2.49184 7.40439 3.07984 7.42175C1.45684 6.33066 0.955844 4.15753 1.93609 2.45859C3.81109 4.78123 6.57784 6.19323 9.54709 6.34349C9.24934 5.0523 9.65659 3.6992 10.6151 2.79083C12.1023 1.3826 14.4416 1.45509 15.8403 2.95242C16.6676 2.78857 17.4603 2.48276 18.1856 2.0501C17.9096 2.91089 17.3328 3.64181 16.5618 4.10694C17.2946 4.0186 18.0093 3.82152 18.6836 3.521C18.1878 4.26777 17.5638 4.91941 16.8408 5.4457Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_698_456">
                  <rect
                    width="18"
                    height="18.122"
                    fill="white"
                    transform="translate(0.683594 0.081543)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </Link>
      </li>
      <li>
        <Overlay target={instagram.current} show={showInstagram} placement="top">
          {(props) => (
            <Tooltip id="instagram" {...props}>
              Instagram
            </Tooltip>
          )}
        </Overlay>
        <Link
          href="#"
          className="socilalist-link"
          target="_blank"
          ref={instagram}
          onMouseEnter={() => setShowInstagram(true)}
          onMouseLeave={() => setShowInstagram(false)}
        >
          <span className="icon-wrapper">
            <FaInstagram />
          </span>
        </Link>
      </li>
    </ul>
  )
}