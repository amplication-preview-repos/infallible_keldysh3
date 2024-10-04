import { Charity as TCharity } from "../api/charity/Charity";

export const CHARITY_TITLE_FIELD = "name";

export const CharityTitle = (record: TCharity): string => {
  return record.name?.toString() || String(record.id);
};
