import { commentList } from '../db/testionials'

const RenderTestimonials = () => {
    return (
        <div className='bg-fixed bg-cover bg-center bg-bg_image'>
            <div className='mt-16 md:mt-[100px] xl:mt-[120px] h-[470px] bg-[rgb(22,36,63,0.6)] text-white flex flex-col items-center relative '>
                <div className='flex gap-5 flex-col items-center pt-20 md:pt-[138px] xl:pt-[112px] 2xl:pt-[125px]'>
                    <h4 className='text-sm md:text-lg font-IBM-Plex-Sans tracking-[5px] uppercase font-medium xl:pl-5 2xl:pl-0'>Our visitors said</h4>
                    <h2 className='text-4xl xl:text-5xl capitalize font-Cormorant-Garamond font-medium'>See the excitement through their eyes</h2>
                    <p className='font-IBM-Plex-Sans font-light text-sm w-[90%] xl:text-[16px] leading-[24px] text-center md:w-[60%] text-stone-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <CommentCard commentList={commentList}></CommentCard>
            </div>
        </div>
    );
};


const CommentCard = ({ commentList }) => {
    const renderCommentCards = (sliceCount) => {
        return commentList.slice(0, sliceCount).map((person, index) => (
            <div className='flex flex-col justify-center items-center text-[#315779] font-Cormorant-Garamond' key={person.id}>
                <div className="text-center pb-7 bg-[#E9F5FF] shadow-sm">
                    <p className='text-center italic text-[22px] p-8 leading-8'>{person.comment}</p>
                </div>
                <div className='absolute bottom-0 flex flex-col items-center justify-center'>
                    <div className="absolute flex shadow-md h-[105px] w-[105px] p-1.5 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800 -bottom-10">
                        <img className='w-full h-full object-cover rounded-full' src={person.image} alt='' />
                    </div>
                    <div className='absolute flex flex-col items-center justify-center mt-32  flex-nowrap'>
                        <p className='whitespace-nowrap w-full items-end text-[22px] leading-[28px] font-medium'>{person.name}</p>
                        <p className='items-end text-xs tracking-[5px] uppercase'>Visitors</p>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className='absolute w-[90%] 2xl:w-[65%] bg-white border flex gap-5 p-5 items-center justify-center bottom-0 transform translate-y-1/2 -translate-x-0'>
            <div className='flex md:hidden xl:hidden'>
                {renderCommentCards(1)}
            </div>
            <div className='hidden md:flex xl:hidden gap-5'>
                {renderCommentCards(2)}
            </div>
            <div className='hidden md:hidden xl:flex gap-5'>
                {renderCommentCards(commentList.length)}
            </div>
        </div>
    );
};

export default RenderTestimonials;
