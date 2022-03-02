import React, {useRef, useState} from 'react';
import './DropDown.scss';
import Button from '../Button/Button';
import useOutside from '../hooks/useOutsideAlerter';

interface IDropDownProps {
  array: string [],
  className?: string,
  children: string,
  callBack: (elem: string) => void,
}

function DropDown(props: IDropDownProps) {
  const {array, className, children, callBack} = props;
  const [opened, setOpened] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const clickHandler = (elem: string) => {
    setOpened(false);
    callBack(elem);
  }

  useOutside(wrapperRef, setOpened);

  return (
    <div className={`dropdown ${className}`} ref={wrapperRef}>
      <Button className='dropdown__button' click={() => setOpened(!opened)}>{children}</Button>
      {opened
        ? <ul className='dropdown__menu'>
            {array.map((elem) => {
              return (
                <li
                  key={elem}
                  onClick={() => clickHandler(elem)}
                >
                  {elem}
                </li>
              )
            })}
          </ul>
        : null
      }
    </div>
  );
}

export default DropDown;
