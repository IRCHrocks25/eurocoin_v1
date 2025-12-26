import aroundWorldImage from 'figma:asset/410c3871512cd890781e47427996c6c48780838b.png';

export function AroundWorldSection() {
  return (
    <section className="relative w-full bg-[#0a0e27]">
      <div className="w-full">
        <img 
          src={aroundWorldImage} 
          alt="With you all around the world" 
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
