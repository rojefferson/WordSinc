using AutoMapper;


namespace api.Models{
    public class MappingVenda : Profile {

        public MappingVenda()
        {
            CreateMap<Venda,ViewVenda>();
            CreateMap<ViewVenda,Venda>();
        }
    }

}