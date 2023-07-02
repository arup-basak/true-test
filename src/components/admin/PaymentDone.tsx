import Image from 'next/image'
import payment_done_icon from 'public/payment-done.svg'
import { motion } from 'framer-motion'

interface Props {
    onClick: () => void
}

const PaymentDoneButton = (props: Props) => {
    return (
        <motion.div
            className='p-2 mx-2 cursor-pointer'
            onClick={() => props.onClick()}
            initial={{
                scale: 1.3
            }}
            whileHover={{
                scale: 1.5
            }}
            whileTap={{
                scale: 1
            }}>
            <Image
                src={payment_done_icon}
                alt='Payment Done'
                height={24}
                width={24}
            />
        </motion.div>
    )
}

export default PaymentDoneButton