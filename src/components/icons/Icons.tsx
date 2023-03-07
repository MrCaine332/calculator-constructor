import React, {Component} from 'react';

export type IconNames = 'eye' | 'brackets' | 'add'

interface IIcons {
	name?: IconNames
	size?: number | string
	color?: string
}

const Icons: React.FC<IIcons> = ({ name, size, color }) => {
	switch (name) {
		case "eye":
			return (
				<svg width={size} height={size} viewBox="0 0 20 20" fill={color} xmlns="http://www.w3.org/2000/svg">
					<path d="M11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M2.04834 9.99999C3.11001 6.61916 6.26917 4.16666 10 4.16666C13.7317 4.16666 16.89 6.61916 17.9517 9.99999C16.89 13.3808 13.7317 15.8333 10 15.8333C6.26917 15.8333 3.11001 13.3808 2.04834 9.99999Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			)

		case "brackets":
			return (
				<svg width={size} height={size} viewBox="0 0 20 20" fill={color} xmlns="http://www.w3.org/2000/svg">
					<path d="M7.49984 13.3333L4.1665 10L7.49984 6.66668M12.4998 6.66668L15.8332 10L12.4998 13.3333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>

			)
		case "add":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M12 4C10.0478 4 8.24816 4.161 6.80371 4.35177C5.50372 4.52346 4.52346 5.50372 4.35177 6.80371C4.16101 8.24816 4 10.0478 4 12C4 13.9522 4.161 15.7518 4.35177 17.1963C4.52346 18.4963 5.50372 19.4765 6.80371 19.6482C8.24816 19.839 10.0478 20 12 20C13.9522 20 15.7518 19.839 17.1963 19.6482C18.4963 19.4765 19.4765 18.4963 19.6482 17.1963C19.839 15.7518 20 13.9522 20 12C20 10.0478 19.839 8.24816 19.6482 6.80371C19.4765 5.50372 18.4963 4.52346 17.1963 4.35177C15.7518 4.16101 13.9522 4 12 4ZM6.54184 2.36899C4.34504 2.65912 2.65912 4.34504 2.36899 6.54184C2.16953 8.05208 2 9.94127 2 12C2 14.0587 2.16953 15.9479 2.36899 17.4582C2.65912 19.655 4.34504 21.3409 6.54184 21.631C8.05208 21.8305 9.94127 22 12 22C14.0587 22 15.9479 21.8305 17.4582 21.631C19.655 21.3409 21.3409 19.655 21.631 17.4582C21.8305 15.9479 22 14.0587 22 12C22 9.94127 21.8305 8.05208 21.631 6.54184C21.3409 4.34504 19.655 2.65912 17.4582 2.36899C15.9479 2.16953 14.0587 2 12 2C9.94127 2 8.05208 2.16953 6.54184 2.36899Z" fill={color}/>
					<path d="M8.99963 11C10.1042 11 10.9996 10.1046 10.9996 9C10.9996 7.89543 10.1042 7 8.99963 7C7.89506 7 6.99963 7.89543 6.99963 9C6.99963 10.1046 7.89506 11 8.99963 11Z" fill={color}/>
					<path d="M18.121 12.7073L19.9153 14.5016C19.8534 15.4378 19.7629 16.3065 19.6633 17.0781L16.7067 14.1215C16.3162 13.731 15.683 13.731 15.2925 14.1215L13.121 16.2931C11.9494 17.4647 10.0499 17.4647 8.87831 16.2931L8.70674 16.1215C8.31621 15.731 7.68305 15.731 7.29252 16.1215L4.88346 18.5306C4.60438 18.1522 4.41766 17.6981 4.35139 17.1963C4.31525 16.9227 4.28018 16.6363 4.24707 16.3385L5.87831 14.7073C7.04989 13.5357 8.94938 13.5357 10.121 14.7073L10.2925 14.8789C10.683 15.2694 11.3162 15.2694 11.7067 14.8789L13.8783 12.7073C15.0499 11.5357 16.9494 11.5357 18.121 12.7073Z" fill={color}/>
				</svg>
			)

		default:
			return ( <></> )
	}
};

export default Icons;