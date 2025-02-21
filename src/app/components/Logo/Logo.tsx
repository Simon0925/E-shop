

import { Black_Ops_One} from 'next/font/google';

const BlackOpsOne = Black_Ops_One({
    subsets: ['latin'], 
    weight:'400'
  });

const Logo = () => {
    return(
       <section >
            <h1 className={`text-3xl text-black ${BlackOpsOne.className}`}>
                E-Movement
            </h1>
       </section>
    )
}

export default Logo