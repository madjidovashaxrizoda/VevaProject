import React from 'react';
import { Link } from 'react-router-dom';



function ButtonMain({ to, bgColor, text, px, Icon, mt, py, onClick }) {
  return (
    <Link to={to} onClick={onClick} className={`inline-flex items-center ${px} ${py} text-lg ${bgColor} ${mt} text-white rounded-[1000px] `}>
      {Icon && <Icon className="mr-2"/>}
      {text}
    </Link>
  );
}

export default ButtonMain;