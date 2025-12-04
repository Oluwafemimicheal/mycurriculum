import { ThreeDots } from 'react-loader-spinner'

const Loading = () => {
    return (
    <div>
      <ThreeDots
        height="50"
        width="50"
        color="darkblue"
        ariaLabel="tail-spin-loading"
        visible={true}
      />
    </div>
  )
}

export default Loading
