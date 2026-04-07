import AsyncStorage from '@react-native-async-storage/async-storage';

const shrkkwaterrshhSavedKey = 'shrkkwaterrshh_saved_ids_v1';

export async function ShrkkwaterrshhGetSavedIds(): Promise<string[]> {
  const raw = await AsyncStorage.getItem(shrkkwaterrshhSavedKey);
  if (!raw) {
    return [];
  }
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.every(v => typeof v === 'string')) {
      return parsed;
    }
    return [];
  } catch {
    return [];
  }
}

export async function shrkkwaterrshhGetSavedIds(): Promise<string[]> {
  return await ShrkkwaterrshhGetSavedIds();
}

export async function ShrkkwaterrshhSetSavedIds(ids: string[]): Promise<void> {
  const unique = Array.from(new Set(ids));
  await AsyncStorage.setItem(shrkkwaterrshhSavedKey, JSON.stringify(unique));
}

export async function ShrkkwaterrshhToggleSavedId(
  id: string,
): Promise<{saved: boolean; ids: string[]}> {
  const ids = await ShrkkwaterrshhGetSavedIds();
  const isSaved = ids.includes(id);
  const next = isSaved ? ids.filter(x => x !== id) : [...ids, id];
  await ShrkkwaterrshhSetSavedIds(next);
  return {saved: !isSaved, ids: next};
}

export async function shrkkwaterrshhSetSavedIds(ids: string[]): Promise<void> {
  return await ShrkkwaterrshhSetSavedIds(ids);
}

export async function shrkkwaterrshhToggleSavedId(
  id: string,
): Promise<{saved: boolean; ids: string[]}> {
  return await ShrkkwaterrshhToggleSavedId(id);
}
