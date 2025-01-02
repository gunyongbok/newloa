"use client";

import { fetchCharacterSiblings } from "@/services/fetchCharacterSiblings";
import { useState } from "react";

export default function Home() {
  const [characterName, setCharacterName] = useState<string>("");
  const [characterData, setCharacterData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // 입력값 변경 핸들러
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterName(event.target.value);
  };

  // 검색 실행 핸들러
  const handleSearch = async () => {
    if (!characterName.trim()) {
      setError("캐릭터명을 입력해주세요.");
      return;
    }

    try {
      setError(null); // 이전 에러 초기화
      const data = await fetchCharacterSiblings(characterName.trim());
      setCharacterData(data);
    } catch (err: any) {
      setCharacterData(null);
      setError(err.message);
    }
  };

  // 엔터 키로 검색 실행
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="grid justify-center content-center bg-header h-[770px] p-2">
      <div className="grid justify-center w-[1240px] h-[700px]">
        <div className="flex items-center gap-2">
          <input
            type="search"
            value={characterName}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="bg-purple-white shadow rounded border-0 p-3 h-12 w-[600px] outline-none"
            placeholder="검색할 캐릭터명을 입력해주세요."
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white rounded p-2 h-12"
          >
            검색
          </button>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {characterData && (
          <div className="mt-4 bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-2">캐릭터 정보</h2>
            {characterData && (
              <div className="mt-4 bg-white p-4 rounded shadow h-[500px] overflow-y-auto">
                <h2 className="text-lg font-bold mb-2">캐릭터 정보</h2>
                {characterData.map((char: any, index: number) => (
                  <div
                    key={index}
                    className="border-b border-gray-300 pb-2 mb-2"
                  >
                    <p>서버: {char.ServerName}</p>
                    <p>캐릭터명: {char.CharacterName}</p>
                    <p>레벨: {char.CharacterLevel}</p>
                    <p>직업: {char.CharacterClassName}</p>
                    <p>평균 아이템 레벨: {char.ItemAvgLevel}</p>
                    <p>최대 아이템 레벨: {char.ItemMaxLevel}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
