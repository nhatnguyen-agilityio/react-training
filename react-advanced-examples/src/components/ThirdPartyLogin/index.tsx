import facebookIcon from '@/assets/facebook.svg'
import googleIcon from '@/assets/google.svg'
import xIcon from '@/assets/x.svg'
import Image from '../common/Image'

const ThirdPartyLogin = () => {
  return (
    <div>
      <div className="flex mt-10 items-center">
        <p className='mr-13'>Or, Login with</p>
        <Image src={facebookIcon} alt="Facebook" className='mr-4' />
        <Image src={googleIcon} alt="Google" className='mr-4' />
        <Image src={xIcon} alt="X" />
      </div>
      <div className='flex mt-4'>
        <p className='mr-1'>Don&apos;t have an account?</p>
        <a href=""><span className='text-blue-500'> Create One</span></a>
      </div>
    </div>
  )
}

export default ThirdPartyLogin
