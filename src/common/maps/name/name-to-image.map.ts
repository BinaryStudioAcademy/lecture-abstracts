import {
  volodymyrKushnir2017Avatar,
  romanSahan2017Avatar,
  alexandrTovmach2018Avatar,
  pavelNemchenko2017Avatar,
  rostyslavDiakiv2018Avatar,
  nikitaKrasnov2018Avatar,
  kyryloLesohorskyi2020Avatar,
  LenchVolodymyr2021Avatar,
  oleksandrDanylchenko2021Avatar,
  viktoriiaVasylenko2021Avatar,
  ivanHedz2023Avatar,
  ulianaLobanova2021Avatar,
  serhiiYanchuk2023Avatar,
} from '~/assets/images/avatars/intro-rounded/intro-rounded';

import { AuthorName } from '~/common/enums/enums';

const nameToImage = {
  [AuthorName.VIKTORIIA_VASYLENKO_EN]: viktoriiaVasylenko2021Avatar,
  [AuthorName.VIKTORIIA_VASYLENKO_UA]: viktoriiaVasylenko2021Avatar,
  [AuthorName.VIKTORIIA_VASYLENKO_RU]: viktoriiaVasylenko2021Avatar,
  [AuthorName.OLEKSANDR_DANYLCHENKO_UA]: oleksandrDanylchenko2021Avatar,
  [AuthorName.OLEKSANDR_DANYLCHENKO_EN]: oleksandrDanylchenko2021Avatar,
  [AuthorName.OLEKSANDR_DANYLCHENKO_RU]: oleksandrDanylchenko2021Avatar,
  [AuthorName.ALEXANDR_TOVMACH_RU]: alexandrTovmach2018Avatar,
  [AuthorName.ALEXANDR_TOVMACH_UA]: alexandrTovmach2018Avatar,
  [AuthorName.KYRYLO_LESOHORSKYI]: kyryloLesohorskyi2020Avatar,
  [AuthorName.NIKITA_KRASNOV]: nikitaKrasnov2018Avatar,
  [AuthorName.PAVEL_NEMCHENKO]: pavelNemchenko2017Avatar,
  [AuthorName.VOLODYMYR_LENCH_UA]: LenchVolodymyr2021Avatar,
  [AuthorName.VOLODYMYR_LENCH_RU]: LenchVolodymyr2021Avatar,
  [AuthorName.ROSTYSLAV_DIAKIV]: rostyslavDiakiv2018Avatar,
  [AuthorName.ROMAN_SAHAN]: romanSahan2017Avatar,
  [AuthorName.VOLODYMYR_KUSHNIR_RU]: volodymyrKushnir2017Avatar,
  [AuthorName.VOLODYMYR_KUSHNIR_UA]: volodymyrKushnir2017Avatar,
  [AuthorName.IVAN_HEDZ]: ivanHedz2023Avatar,
  [AuthorName.ULIANA_LOBANOVA]: ulianaLobanova2021Avatar,
  [AuthorName.SERHII_YANCHUK_EN]: serhiiYanchuk2023Avatar,
  [AuthorName.SERHII_YANCHUK_UA]: serhiiYanchuk2023Avatar,
};

export { nameToImage };
