import Icon from '@/components/icon/Icon';

function FoodTypeCard({ type, path }: { type: string; path: string }) {
  return (
    <div className="my-2 flex w-max flex-col items-center rounded-lg p-2 shadow-sm">
      <Icon path={path} size={60} strokeColor="black" strokeWidth="1.5" />
      <p className="text-xs font-bold leading-tight text-neutral-800 dark:text-neutral-50">
        {type}
      </p>
    </div>
  );
}

export default FoodTypeCard;
