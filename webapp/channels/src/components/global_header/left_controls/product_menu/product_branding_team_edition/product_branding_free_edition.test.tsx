// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {renderWithContext, screen} from 'tests/react_testing_utils';
import {TestHelper} from 'utils/test_helper';

import ProductBrandingFreeEdition from './product_branding_free_edition';

describe('ProductBrandingFreeEdition', () => {
    test('should show Wyre chat branding without edition badge', () => {
        const state = {
            entities: {
                general: {
                    license: TestHelper.getLicenseMock({
                        IsLicensed: 'false',
                        SkuShortName: '',
                    }),
                },
            },
        };

        const {container} = renderWithContext(
            <ProductBrandingFreeEdition/>,
            state,
        );

        expect(screen.getByText('Wyre chat')).toBeInTheDocument();
        expect(screen.queryByText('TEAM EDITION')).not.toBeInTheDocument();
        expect(container.querySelector('svg')).not.toBeInTheDocument();
    });
});
