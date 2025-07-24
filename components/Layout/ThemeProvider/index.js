/* eslint-disable react/prop-types */
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { BaseModalBackground } from 'styled-react-modal';
// import constants from 'utils/constants';

export const screenSizes = {
  breakpoints: {
    mobileSmall: 320,
    mobileLarge: 480,
    tablet: 768,
    desktop: 1024,
    desktopLarge: 1440,
    maxWidth: '1168px'
  }
};

// export function imageUrl(image) {
//   let url = '';
//   if (image.length > 100 || image.includes('http') || image.includes('https')) {
//     url = image;
//   } else {
//     url = `${constants.cdn_site}${image}`;
//   }
//   return url;
// }

export function formatDate(date) {
  const newDate = new Date(date);
  return newDate;
}

export const palette = {
  // Palette with nested attributes only works for arrays, not objects unfortunately
  transparent: 'transparent',
  // Solids
  black: '#101010',
  body: '#4A5567',
  placeholder: '#999999',
  borders: '#E1E1E1',
  border: 'rgba(16, 16, 16, 0.1)',
  white: '#FFFFFF',
  gray: '#606060'
};

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

export const notify = (alert, type) => {
  toast(alert, {
    position: 'bottom-center',
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    type,
    progress: undefined
  });
};

export const emptyCollection = {
  name: '',
  items: []
};

export const navigateTo = (url) => {
  if (url) {
    if (url.includes('https') || url.includes('www')) {
      // window.open(url, '_blank').focus();
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.click();
    } else {
      window.location.assign(url);
    }
  } else {
    notify('No hay link asignado', 'error');
  }
};

export const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export const weekDays = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
];
