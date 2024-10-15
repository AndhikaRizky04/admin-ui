const Label = () => {
  return (
    <>
    

<label htmlFor="password" className="block text-sm mb-2">
                Password
              </label> 
              
              <input type="password" 
    className="py-3 ps-4 text-sm border rounded-md w-full bg-special-mainBg border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0"
    placeholder="**************"
    name="password"
    id="password"
    />
              </>
  )
}

export default Label;

