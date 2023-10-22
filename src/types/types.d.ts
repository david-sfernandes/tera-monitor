type APIDevice = {
  id: number;
  hostname: string;
  apelido: string;
  ip_interno: string;
  macaddres: string;
  marca: string;
  fabricante: string;
  is_ativo: boolean;
  data_criacao: string;
  ip_externo: string;
  data_ultima_atualizacao: string;
  dominio: string;
  sistema_operacional: string;
  sistema_operacional_licenca: string;
  sistema_operacional_versao_build: string;
  placa_mae: string;
  placa_mae_serial: string;
  processador: string;
  versao_client: string;
  observacao: string;
  usuario_logado: string;
  total_processadores: number;
  numero_serial: string;
  placa_mae_modelo: string;
  data_compra: string;
  data_garantia: string;
  modelo_notebook: string;
  nome_fantasia: string;
  tipo_dispositivo_text: string;
  tipo_dispositivo_icone: string;
};

type DeviceResponse = {
  meta: {
    paginate: {
      current_page: number;
      total: number;
      to: number;
      from: number;
      last_page: number;
      per_page: string;
    };
  };
  lista: APIDevice[];
};

type MilvusStatus = {
  hostname: string | null;
  status: "Offline" | "Online" | "Desconhecido";
};

type StatusResponse = {
  id: string;
  status: MilvusStatus;
  date: Date;
};

type MilvusDevice = {
  id: number;
  hostname: string;
  ip: string;
  observacao: string | null;
  versao_client: string;
  apelido: string | null;
  possui_antivirus: number;
  data_ultima_atualizacao: string;
  data_criacao: string;
  usuario_logado: string;
  grupo_dispositivo_id: number | null;
  is_ativo: boolean;
  tipo_agent_id: number;
  is_agent: boolean;
  sistema_operacional: string;
  total_processadores: number;
  token: string;
  macaddres: string;
  arquitetura_sistema_operacional: string;
  empresa_id: number;
  is_tablet: boolean;
  status_vulnerabilidade_id: number;
  perfil_maquina_id: number | null;
  ip_externo: string;
  possui_snmp: boolean;
  is_home_office: boolean;
  total_alertas: number;
  total_alertas_espaco_disco: number;
  total_alertas_memoria_ram: number;
  total_alertas_script: number;
  total_alertas_temperatura: number;
  total_alertas_cpu: number;
  tipoDispositivo: {
    nome: string;
    icone: string;
    imagem: string;
  };
  nome_fantasia: string;
  cliente_id: number;
  grupo_dispositivo: null;
  scripts: boolean;
  online_status_id: number;
  is_online: boolean;
  is_dispositivo: boolean;
  tipo_dispositivo_key: string;
  tipo_dispositivo: string;
  dispositivo_vinculado_tipo: number;
  contador: {
    total_chamados: number;
    total_chamados_abertos: number;
    total_diretivas_ativas: number;
  };
  patrimonio: string;
  data_ate_momento: string;
  tipo_dispositivo_text: string;
  tipo_dispositivo_icone: string;
  tipo_dispositivo_imagem: string;
  possui_acesso_remoto: boolean;
  temperatura_status_id: number;
  storage_status_id: number;
  memoria_status_id: number;
  diretiva_status_id: number;
  cpu_status_id: number;
  versao_client_id: number;
  status_ordem_id: number;
  tipo_maquina: number;
  mostrar_botao_conexao: boolean;
  status_vulnerabilidade_text: string;
  utiliza_acesso_remoto: boolean;
};

type MilvusResponse = {
  meta: {
    paginate: {
      current_page: string;
      total: number;
      to: number;
      from: number;
      last_page: number;
      per_page: string;
    };
  };
  lista: MilvusDevice[];
};

type Device = {
  id: number,
  name: string,
  company: string,
  status: string,
  type: string,
}
interface IDevicesStore {
  devices: Device[],
  setDevices: (devices: Device[]) => void,
  updateDevice: (device: Device) => void,
}