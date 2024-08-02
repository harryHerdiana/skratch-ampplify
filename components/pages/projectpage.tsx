import Image from 'next/image';

export default function ProjectPage() {
  const projects = [
    {
      year: '2023',
      name: 'Certor',
      image: '/img/new-layout/project-1.png',
    },
    {
      year: '2023',
      name: 'EVVY',
      image: '/img/new-layout/project-2.png',
    },
    {
        year: '2023',
        name: 'Certor',
        image: '/img/new-layout/project-3.png',
        },
        {
        year: '2023',
        name: 'EVVY',
        image: '/img/new-layout/project-4.png',
        },
        {
        year: '2023',
        name: 'Certor',
        image: '/img/new-layout/project-5.png',
        },
        {
        year: '2023',
        name: 'EVVY',
        image: '/img/new-layout/project-6.png',
        },
        {
        year: '2023',
        name: 'Certor',
        image: '/img/new-layout/project-7.png',
        },
        {
        year: '2023',
        name: 'EVVY',
        image: '/img/new-layout/project-8.png',
        },
  ];

  const services = [
    'UX/UI DESIGN',
    'CUSTOM THEME DEVELOPMENT',
    'STORE SET-UP',
    'APP INTEGRATION',
    'CUSTOM APP DEVELOPMENT',
    ''
  ];

  return (
    <div className="sm:px-6 lg:px-8 
        pt-12 bg-[#FDFCF3] text-[#1F1F1F] rounded-[20px]">
      <main className='mt-[90px] md:mt-[175px] mx-auto px-4' >
        <h1 className="md:text-[120px] text-[52px]  font-bold mb-[60px] md:mb-[120px]">PROJECTS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="space-y-4 mb-[60px] md:mb-[120px]">
                <div className='text-[20px] md:text-[30px]'>
                <p className="text-gray-500">{project.year}</p>
                <h2 className="font-semibold">{project.name}</h2>
              </div>
              <div className="rounded-xl relative w-full md:w-[45vw] md:h-[calc(40vw*0.75)] h-[calc(90vw*0.75)]">
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  style={{borderRadius:'4px'}}
                />
              </div>
                <div className='space-y-4 md:w-[45vw]'>
                    <div className="mt-4">
                    <h3 className="text[12px] font-semibold mb-4 md:text[18px]">Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                        <div className="">
                        {services.slice(0, 3).map((service, index) => (
                            <div key={index} className={`text-[#1F1F1F] text-opacity-40 flex         items-center border-b border-gray-200 ${index==0 && 'border-t'} p-2 leading-none`}>
                                <span className="text-sm font-medium w-10">{service ? index + 1 : ''}</span>
                                <span className="text-sm">{service}</span>
                            </div>
                        ))} 
                        </div>
                        <div className="">
                        {services.slice(3).map((service, index) => (
                            <div key={index + 3} className={`text-[#1F1F1F] text-opacity-40 flex         items-center border-b border-gray-200 ${index==0 && 'md:border-t'} p-2 leading-none`}>
                                <span className="text-sm font-medium w-10 min-h-4">{service ? index + 4 : ''}</span>
                                <span className="text-sm">{service}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}