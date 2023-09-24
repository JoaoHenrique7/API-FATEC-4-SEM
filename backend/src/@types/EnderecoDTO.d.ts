import Cidade from "../database/models/Cidade.model";
import Endereco from "../database/models/Endereco.model";
import Logradouro from "../database/models/Logradouro.model";

type LogradouroDTO = Pick<Logradouro, "nomeLogradouro">;
type CidadeDTO = Pick<Cidade, "nomeCidade">;
type BairroDTO = Pick<Bairro, "nomeBairro">;

type EnderecoDTO = Pick<Endereco, "nomeEndereco"> & LogradouroDTO & CidadeDTO & BairroDTO;