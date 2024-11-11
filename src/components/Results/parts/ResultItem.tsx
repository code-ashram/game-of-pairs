const ResultItem = () => {

  return (
    <li className="resultItem">
      <div className="itemPhoto w-[90px] h-[90px] rounded-full bg-[#4a90e2]"></div>

      <div className="itemInfo text-left text-black">
        <p className="itemUser">Sachinandan Kishor</p>
        <p className="itemTime">29.01.2024</p>
        <p className="itemSteps">steps: 16</p>
      </div>
    </li>
  )
}

export default ResultItem
