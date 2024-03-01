
'use client';
import React, { useEffect } from 'react'
import Image from 'next/image';

import { AuthUtil } from "@/app/components/auth";
import { useLocale } from 'next-intl';
import { useTranslations } from "next-intl";
import Link from 'next/link';
import { useAuth } from '@/app/store/auth-context';
export default function ProfilePage() {
  const localActive = useLocale();
  const t = useTranslations('Profile')
  const { profile } = useAuth();

  const name = profile?.name || 'Guest';
  return (
    <>
      <div >
        <AuthUtil failedRedirectUrl={`/${localActive}/login`} />

        <div className="flex flex-row">
          <div className=" h-screen bg-gray-200 basis-1/4">
            <div className='w-1/2 m-24 '>
              <div className="relative ">
                <div className="absolute inset-0  bg-sky-300 rounded-lg blur"></div>
                <div className="relative p-3 bg-white ring-1 ring-gray-900/5 rounded-2xl leading-none flex items-top justify-start space-x-6">
                  <Image
                    src="http://spar.openg2p.my/spar/img/user_image_02.png"
                    alt="Woman looking front"
                    className="relative object-cover object-center w-23 h-32 "
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex-grow'>
              <div className='mt-24'>
                <div className="m-12 pl-24 ">
                  <div className=" opacity-100 flex items-start ">
                    <div className="flex-1 min-w-0 mt-2 ">

                      <div className="text-sm font-medium text-gray-600  no-underdivne ">
                        {t('name')}
                      </div>
                      <p className="text-2xl text-orange-500  ">
                        {name}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className=" opacity-100 flex items-start ">
                      <div className=" rounded-lg opacity-100 w-10 h-10 m-2 flex-shrink-0  ">
                        <Image className=" square-full  " src="http://spar.openg2p.my/spar/img/phone.png" alt="phone" width={100} height={300} />
                      </div>
                      <div className="flex-1 min-w-0 mt-2 ">
                        <div className="text-sm font-medium text-gray-600  no-underdivne ">
                          {t('ph_no')}
                        </div>
                        <p className="text-md text-black font-bold ">
                          +745 12345 67890
                        </p>
                      </div>
                    </div>
                    <div className=" opacity-100 flex items-start ">
                      <div className=" rounded-lg opacity-100 w-10 h-10 m-2 flex-shrink-0  ">
                        <Image className="square-full " src="http://spar.openg2p.my/spar/img/email.png" alt="email" width={100} height={300} />
                      </div>
                      <div className="flex-1 min-w-0 mt-2 ">
                        <div className="text-sm font-medium text-gray-600  no-underdivne ">
                          {t('email')}
                        </div>
                        <p className="text-md text-black font-bold">
                          johnsmith@gmail.com
                        </p>
                      </div>
                    </div>

                  </div>
                  <div className="w-full border-b-2 border-orange-200 border-opacity-100 p-2 flex items-start space-x-4"></div>
                  <div className='flex  gap-80 mt-2 '>
                    <div className=" opacity-100 flex items-start  ">
                      <div className=" rounded-lg opacity-100 w-10 h-10 m-2 flex-shrink-0  ">
                        <Image className="square-full " src="http://spar.openg2p.my/spar/img/dob.png" alt="dob" width={100} height={300} />
                      </div>
                      <div className="flex-1 min-w-0 mt-2 ">
                        <div className="text-sm font-medium text-gray-600  no-underdivne ">
                          {t('dob')}
                        </div>
                        <p className="text-md text-black font-bold ">
                          1975 January 01
                        </p>
                      </div>
                    </div>
                    <div className=" opacity-100 flex items-start ml-10 ">
                      <div className=" rounded-lg opacity-100 w-10 h-10 m-2 ml-5 flex-shrink-0  ">
                        <Image className=" square-full  " src="http://spar.openg2p.my/spar/img/gender.png" alt="gender" width={100} height={300} />
                      </div>
                      <div className="flex-1 min-w-0 mt-2 ">
                        <div className="text-sm font-medium text-gray-600  no-underdivne ">
                          {t('gender')}
                        </div>
                        <p className="text-md text-black font-bold">
                          Male
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full border-b-2 border-orange-200 border-opacity-100 p-2 flex items-start space-x-4"></div>
                  <div className="mt-4 opacity-100 flex items-start ">
                    <div className="flex-1 min-w-0 mt-2 ">
                      <p className="text-sm font-medium text-gray-600">{t('add')}</p>
                      <div className="flex flex-col w-1/2 border-dashed border-2  mt-2 square-full border-gray-400 p-4 rounded-2xl">
                        <p className="text-sm text-wrap w-1/2 text-black "> Locality -- Spencer Villa
                          Street -- 123450 Emily Radial
                          Apartment -- 152
                          Country -- New York, USA
                          Postal Code -- 321000</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full border-b-2 border-orange-200 border-opacity-100 p-2 flex items-start space-x-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative '>
        <Link href={`/${localActive}/home`} className="absolute bottom-0 right-0 m-4 mb-8">
          <Image
            className="items-end"
            src="http://spar.openg2p.my/spar/img/back_arrow_03.png"
            alt="person"
            width={50}
            height={50}
          />
        </Link>
      </div>
    </>
  );
}

