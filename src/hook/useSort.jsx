

function useSort(setsort,setdata,data) {
    const onHanleChange = (e) =>{
        const value = e.target.value
        setsort(value)
        console.log(value)
        if(value === "id"){
          const sorted = [...data].reverse()
          console.log(sorted)
          setdata(sorted)
        }else {
          const sorted = [...data].sort(
            (a,b)=>a[value].toLowerCase() > b[value].toLowerCase() ? 1:-1
          )
          setdata(sorted)
        }
      }
  return{
    onHanleChange
  } 
}

export default useSort