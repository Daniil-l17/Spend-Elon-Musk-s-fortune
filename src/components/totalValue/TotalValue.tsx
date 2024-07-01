export const TotalValue = ({ totalResult }: { totalResult: number }) => {
	return (
		<div className='bg-[#2ab8b3] sticky top-2 mt-4 flex-col flex justify-center items-center gap-4 px-4 py-4 w-full h-[80px] rounded-lg'>
			<h2 className={`text-4xl ${240_000_000_000 - totalResult < 0 ? 'text-red-500' : 'text-white'} font-bold`}>
				{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(240_000_000_000 - totalResult)}
			</h2>
		</div>
	);
};
