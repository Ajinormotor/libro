import { useState } from 'react';

const InputField = ({ icon, label, placeholder, name, type, value,onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className='flex flex-col w-full gap-2'>
      <label htmlFor={name}
      className='text-[#374151] text-base'> {label}</label>
      <div className='border border-[#E5E7EB] flex items-center rounded-lg h-[40px]
       p-2 gap-2'>
        <i className={`${icon} text-xl text-[#374151]`}></i>
        <input
          type={inputType}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          id={name}
          className='w-full bg-transparent border-0 outline-none h-full'
        />
        {isPassword && (
          <div
            onClick={() => setShowPassword(prev => !prev)}
            className='cursor-pointer'
          >
            {showPassword ? (
              <i className="ri-eye-line"></i>
            ) : (
              <i className="ri-eye-off-line"></i>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
