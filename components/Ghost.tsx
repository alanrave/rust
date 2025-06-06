export default function Ghost({ className }: { className?: string }) {
  return (
    <svg className={className} width="800px" height="800px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.2929 8.70711L8 3.41421L2.70711 8.7071L1.29289 7.29289L8 0.585785L14.7071 7.29289L13.2929 8.70711Z" fill="currentColor"/>
      <path d="M13.2929 15.2071L8 9.91421L2.70711 15.2071L1.29289 13.7929L8 7.08578L14.7071 13.7929L13.2929 15.2071Z" fill="currentColor"/>
    </svg>
  );
}