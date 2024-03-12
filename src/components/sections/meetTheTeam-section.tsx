import PersonCard from '../cards/person-card';

const MeetTheTeam = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-10 relative 2xl:px-[200px] lg:px-[150px] md:px-[75px] px-[20px]">
      <div className="max-w-[52rem] flex flex-col items-center gap-8 text-center relative">
        <h1 className="text-foreground-heading sm:text-[60px] text-[34px] font-atyp-display font-medium leading-[120%] z-10">
          Meet the team
        </h1>
        <h3 className="text-foreground-leading text-xl font-medium z-10">
          Expert technical background both in broader crypto and finance
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <PersonCard
          name="Rodrigo Benzaquen"
          role="CEO"
          imageRoute="/assets/team/rodri.png"
          fact1="Co-founder & CTO"
          fact1col="@SenseiNode"
          fact2="Co-founder & CEO"
          fact2col="@Nubeliu"
          fact3="Early tech employee"
          fact3col="@MercadoLibre"
        />
        <PersonCard
          name="Alberto Guerrero Montilla"
          role="CMO"
          imageRoute="/assets/team/albert.png"
          fact1="Co-Founder"
          fact1col="Criptotendencias"
          fact2="Co-Founder"
          fact2col="EOS Venezuela Block Producer"
          fact3="Head of Growth"
          fact3col="SenseiNode"
        />
      </div>
    </div>
  );
};

export default MeetTheTeam;
